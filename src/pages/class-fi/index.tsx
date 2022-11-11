import cn from 'classnames';
import {
  AnimateArcCard,
  AnimateBorder,
  Header,
  ImgViewer,
  MotionOnscreen,
  SubTitle,
} from 'components';
import type { NextPage } from 'next';
import Image from 'next/image';
import { ClassRules, ClassWithWKT } from 'views/class-fi';

import STANDARD_CHART1 from '/public/images/standard_chart1.png';
import STANDARD_CHART2 from '/public/images/standard_chart2.png';

import styles from './index.module.scss';

const ClassFi: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />

      <MotionOnscreen postition='scale'>
        <div className={styles.topTips}>
          <div className={styles.dotAnimate} />
          <p>Anyone could be Learner or Instructor</p>
          <p>and receive WKT as rewards for</p>
          <p>joining classes</p>
        </div>
      </MotionOnscreen>

      <ClassRules />

      <SubTitle backgroundSize='large'>
        <p>Reward rules for having</p>
        <p>classes with USDT</p>
      </SubTitle>

      <MotionOnscreen postition='scale'>
        <div className={styles.rewardRulesusdt}>
          <div className={styles.dotAnimate} />

          <div className={styles.formulaBox}>Class fee ÷ $0.01 x 0.9ⁿ</div>

          <div className={styles.line} />
          <div className={styles.feeDec}>
            <p>【Class Fee refers to expenses</p>
            <p>or income of a class】</p>
            <p>【$0.01 is a fixed radix】</p>
            <p>【n refers to block sequences】</p>
          </div>
        </div>
      </MotionOnscreen>

      <SubTitle backgroundSize='small'>Rules</SubTitle>

      <div className={styles.rulesBox}>
        <div className={styles.dotAnimate} />

        <div className={styles.rules}>
          <AnimateArcCard curveHeight={250} dotLeft={-6}>
            <MotionOnscreen className={styles.info} postition='scale'>
              <div className={styles.rulesDec}>
                WKT has a limit of 180 million tokens. Threr are 180 blocks, with every million as a
                block. the &quot;n&quot; starts from 0, and rise by 1 each time after a block of WKT
                is mined, which means the first block is $0.01x0.9^0, then the second $0.01x0.9^1,
                and so forth, it&rsquo;s $0.01x0.9^179 when it comes to the 180th block
              </div>
            </MotionOnscreen>
          </AnimateArcCard>

          <div className={styles.line} />

          <AnimateArcCard curveHeight={250} dotLeft={-6}>
            <MotionOnscreen className={styles.info} postition='scale'>
              <div className={styles.rulesDec}>
                Accordingly, the cost of mining keeps increasing, from 0.9^0 ($0.01 per token) for
                the first block to 0.9^179($12.75 million per token) for the 180th block, The cost
                may increase by 1 billion times, So take good care of your WKT, because it&rsquo;ll
                get even more percious
              </div>
            </MotionOnscreen>
          </AnimateArcCard>
        </div>
      </div>

      <SubTitle backgroundSize='large'>
        <p>The amout of rewards for</p>
        <p>having classes with USDT</p>
      </SubTitle>

      <div className={styles.amountBox}>
        <MotionOnscreen className={styles.info} postition='scale'>
          <div className={styles.amountTips}>
            <div className={styles.dotAnimate} />
            <p>Different blocks correspond to</p>
            <p>various amount of rewards</p>
          </div>
        </MotionOnscreen>

        <MotionOnscreen className={styles.info} postition='scale'>
          <div className={styles.standardTitle}>The standard is as follows</div>
        </MotionOnscreen>

        <MotionOnscreen className={styles.info} postition='scale'>
          <div className={styles.chartsBox}>
            {/* <Image src={STANDARD_CHART1} layout='fill' alt='chart1' /> */}
            <ImgViewer src={STANDARD_CHART1} canPreview />
          </div>
        </MotionOnscreen>

        <MotionOnscreen className={styles.info} postition='scale'>
          <div className={styles.explainText}>The class fee per day will be reset at 00:00 UTC</div>
        </MotionOnscreen>
      </div>

      <SubTitle backgroundSize='large'>
        <p>The price limit for having</p>
        <p>classes with USDT</p>
      </SubTitle>

      <div className={styles.priceBox}>
        <MotionOnscreen className={styles.info} postition='scale'>
          <div className={styles.priceTips}>
            <div className={styles.dotAnimate} />
            <p>The reward of a class decreases by</p>
            <p>10% correspondingly as the class</p>
            <p>price increases by 10 USDT/min</p>
          </div>
        </MotionOnscreen>

        <MotionOnscreen className={styles.info} postition='scale'>
          <div className={styles.standardTitle}>The standard is as follows</div>
        </MotionOnscreen>

        <MotionOnscreen className={styles.info} postition='scale'>
          <div className={styles.chartsBox}>
            {/* <Image src={STANDARD_CHART2} layout='fill' alt='chart2' /> */}
            <ImgViewer src={STANDARD_CHART2} canPreview />
          </div>
        </MotionOnscreen>
      </div>

      <SubTitle>Pass Fee</SubTitle>

      <div className={styles.rewardRuleswkt}>
        <div className={styles.rewardRulesTips}>
          <MotionOnscreen postition='scale'>
            <div className={styles.feeBox}>WKT class fee 5%</div>
          </MotionOnscreen>

          <MotionOnscreen postition='scale'>
            <div className={styles.feeBox}>USDT class fee 10%</div>
          </MotionOnscreen>
        </div>

        <ClassWithWKT />

        <div className={styles.wktDec}>
          <div className={styles.visionBox}>
            <MotionOnscreen className={styles.info} postition='scale'>
              <div className={styles.vision}>
                <p>Establish an unprecented knowledge</p>
                <p>exchange on the Metaverse</p>
              </div>
            </MotionOnscreen>

            <div className={styles.gifAnimate} />

            <MotionOnscreen className={styles.info} postition='scale'>
              <div className={styles.vision}>
                <p>Redefine the traditional online</p>
                <p>learning platform</p>
              </div>
            </MotionOnscreen>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassFi;
