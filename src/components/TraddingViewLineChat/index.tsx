import { useSize, useThrottleEffect, useUpdateEffect } from 'ahooks';
import cn from 'classnames';
import { LineChartType } from 'constants/enum';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import {
  createChart,
  IChartApi,
  ISeriesApi,
  LineStyle,
  MouseEventParams,
  PriceScaleMode,
} from 'lightweight-charts';
import React, {
  CSSProperties,
  forwardRef,
  ReactElement,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import FloatingTooltip from './components/FloatingTooltip';
import styles from './index.module.scss';

const toolTipMargin = 10;

interface IProps {
  data: any[];
  chartType: `${LineChartType}`;
  className?: string;
  style?: CSSProperties;
}

type ISize = {
  width: number;
  height: number;
};

export type UpdateChart = {
  update: (data: any) => void;
  container: HTMLElement;
};

const TraddingViewLineChat = forwardRef<UpdateChart, IProps>(function Chatt(
  { data, className, style, chartType },
  ref
): ReactElement {
  const id = useId();
  // 容器 size监听
  const containerRef = useRef<HTMLElement>(null);
  const containerSize = useSize(containerRef);
  const containerSizeRef = useRef<ISize>();
  containerSizeRef.current = containerSize;
  // tooltip size监听
  const tooltipRef = useRef<HTMLElement>();
  const tooltipSize = useSize(tooltipRef);
  const tooltipSizeRef = useRef<ISize>();
  tooltipSizeRef.current = tooltipSize;

  const chart = useRef<IChartApi>();
  const areaSeries = useRef<ISeriesApi<'Area'> | null>();

  const [isLoading, setIsLoading] = useState(false);

  const [mouseInfo, setMouseInfo] = useState({
    time: '',
    value: 0,
  });

  const [toolTipStyle, setToolTipStyle] = useState<CSSProperties>({
    display: 'none',
  });

  const dateFormateHandler = useCallback(
    (time: number): any => {
      let date = dayjs.utc(+time * 1000).local();
      // TODO: foramt 国际化
      switch (chartType) {
        case LineChartType.Day:
          return date.format('HH:mm');
        case LineChartType.Week:
          return date.format('MMM D');
        case LineChartType.Month:
          return date.format('MMM D');
        case LineChartType.Year:
          return date.format('MMM D');
      }
    },
    [chartType]
  );

  const mouseEventHandler = useCallback(
    (param: MouseEventParams) => {
      const toolTipWidth = tooltipSizeRef.current?.width ?? 300;
      const toolTipHeight = tooltipSizeRef.current?.height ?? 72;
      if (
        param.point === undefined ||
        !param.time ||
        param.point.x < 0 ||
        param.point.x > containerSizeRef.current!.width ||
        param.point.y < 0 ||
        param.point.y > containerSizeRef.current!.width
      ) {
        setToolTipStyle((preStyle) => {
          return {
            ...preStyle,
            display: 'none',
          };
        });
      } else {
        const dateStr = dayjs(+param.time * 1000).format('YYYY-MM-DD HH:mm');
        let price = param.seriesPrices.get(areaSeries.current!) as number;

        const currentValue = data.find((item) => item.time === param.time);

        let coordinate = areaSeries.current!.priceToCoordinate(price);
        if (coordinate === null) {
          return;
        }

        const shiftedCoordinate =
          param.point.x - toolTipWidth - toolTipMargin > 0
            ? param.point.x - toolTipWidth - toolTipMargin
            : Math.max(0, param.point.x + toolTipMargin);

        const coordinateY =
          coordinate - toolTipHeight - toolTipMargin > 0
            ? coordinate - toolTipHeight - toolTipMargin
            : Math.max(0, coordinate + toolTipMargin);

        setMouseInfo({
          time: dateStr,
          value: price,
          ...currentValue,
        });
        setToolTipStyle((preStyle) => {
          return {
            ...preStyle,
            display: 'block',
            left: shiftedCoordinate + 'px',
            top: coordinateY + 'px',
          };
        });
      }
    },
    [data]
  );

  useEffect(() => {
    if (chart.current === undefined) {
      chart.current = createChart(id, {
        layout: {
          textColor: '#38F7FF',
          backgroundColor: 'transparent',
        },
        crosshair: {
          vertLine: {
            width: 1,
            color: '#2FEA6A',
            labelVisible: false,
          },
          horzLine: {
            width: 1,
            color: '#2FEA6A',
            labelBackgroundColor: '#0096FF',
          },
        },
        grid: {
          vertLines: {
            visible: true,
            style: LineStyle.Dashed,
            color: 'rgba(247, 247, 247, 0.1)',
          },
          horzLines: {
            visible: true,
            style: LineStyle.Dashed,
            color: 'rgba(247, 247, 247, 0.1)',
          },
        },
        timeScale: {
          visible: true,
          secondsVisible: true,
          minBarSpacing: 4,
          fixLeftEdge: true,
          fixRightEdge: true,
          lockVisibleTimeRangeOnResize: true,
          borderColor: '#0096FF',
          tickMarkFormatter: dateFormateHandler,
        },
        leftPriceScale: {
          visible: false,
        },
        rightPriceScale: {
          mode: PriceScaleMode.Logarithmic,
          borderColor: '#0096FF',
          scaleMargins: {
            top: 0.3,
            bottom: 0.4,
          },
        },
        handleScale: false,
      });
    }
  }, []);

  useEffect(() => {
    if (data && data.length) {
      if (areaSeries.current) {
        chart.current!.removeSeries(areaSeries.current);
        areaSeries.current = null;
      }
      areaSeries.current = chart.current!.addAreaSeries({
        topColor: 'rgba(0, 150, 255, 0.1900)',
        bottomColor: 'rgba(0, 199, 255, 0)',
        lineColor: 'rgba(0, 150, 255, 1)',
        crosshairMarkerBackgroundColor: '#2FEA6A',
        lineWidth: 3,
        priceLineStyle: LineStyle.Dashed,
        priceLineColor: '#FF4871',
      });
      areaSeries.current.setData(data);
    }
    chart.current?.applyOptions({
      timeScale: {
        visible: true,
        secondsVisible: true,
        minBarSpacing: 4,
        fixLeftEdge: true,
        fixRightEdge: true,
        lockVisibleTimeRangeOnResize: true,
        borderColor: '#0096FF',
        tickMarkFormatter: dateFormateHandler,
      },
    });
    // chart.current?.unsubscribeCrosshairMove(mouseEventHandler);
    // chart.current?.subscribeCrosshairMove(mouseEventHandler);
  }, [data, chartType, mouseEventHandler]);

  useThrottleEffect(
    () => {
      if (containerSize && chart.current) {
        chart.current?.resize(containerSize!.width, containerSize!.height);
      }
    },
    [containerSize],
    {
      wait: 100,
    }
  );

  useImperativeHandle(ref, () => ({
    update: (data) => {
      areaSeries.current?.update(data);
    },
    container: containerRef.current as HTMLDivElement,
  }));

  return (
    <div
      id={id}
      className={cn(styles.chartComponentContainer, className)}
      style={style}
      ref={containerRef as React.RefObject<HTMLDivElement>}
    >
      {isLoading && (
        <motion.div className={styles.loadingLayer}>
          <img src='https://www.svgrepo.com/show/53124/loading-process.svg' alt='' />
          <span>loading...</span>
        </motion.div>
      )}
      {/* <FloatingTooltip style={toolTipStyle} ref={tooltipRef as any} data={mouseInfo as any} /> */}
    </div>
  );
});

export default TraddingViewLineChat;
