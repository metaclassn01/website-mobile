import { AnimeteRoundedRect4, Header, SubTitle, Toast } from 'components';
import { useAppDispatch } from 'hooks';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import styles from './index.module.scss';

const UploadController = dynamic(() => import('components/UploadController'), { ssr: false });

const maxSize = 1000;

const Feedback: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [evaluate, setEvaluate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [picture, setPicture] = useState<string[]>([]);
  const [currentLen, setCurrentLen] = useState(0);

  useEffect(() => {
    if (evaluate && evaluate.length > maxSize) {
      return;
    }
    setCurrentLen(evaluate ? evaluate.length : 0);
  }, [evaluate]);

  const handleImgOnChange = (imgList: string[]) => {
    setPicture([...imgList]);
  };

  const handleOnSubmit = async () => {
    // const MOBILE =  /^1\d{10}$/; // 手机号正则表达式
    const EMAIL = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/; // 邮箱正则表达式;
    if (!evaluate) {
      Toast('Please describe your feedback');
      return;
    }
    if (!email) {
      Toast('Please enter your email');
      return;
    }
    // if (phone && !MOBILE.test(phone)) {
    //   Toast('Incorrect mobile number, Try again');
    //   return;
    // }
    if (!EMAIL.test(email)) {
      Toast('Incorrect email, Try again');
      return;
    }
    const params = { content: evaluate, email, phone, photoList: picture };
    const res = await dispatch.feedback.saveFeedback(params);
    if (res) {
      Toast('Submitted successfully!');
      setTimeout(() => {
        router.push('/contact-us');
      }, 2000);
    }
  };

  return (
    <div className={styles.container}>
      <Header />

      <SubTitle backgroundSize='small'>Feedback</SubTitle>

      <div className={styles.fieldBox}>
        <div className={styles.titleBox}>
          <span />
          <div className={styles.label}>Evaluate</div>
        </div>
        <div className={styles.textareaBox}>
          <textarea
            maxLength={maxSize}
            placeholder='Please describe your feedback'
            onChange={(e) => setEvaluate(e.target.value)}
            value={evaluate}
          />
          <span className={styles.size}>
            {currentLen}/{maxSize}
          </span>
        </div>
      </div>

      <div className={styles.fieldBox}>
        <div className={styles.titleBox}>
          <span />
          <div className={styles.label}>Email</div>
        </div>
        <div className={styles.inputBox}>
          <input
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
      </div>

      <div className={styles.fieldBox}>
        <div className={styles.titleBox}>
          <span />
          <div className={styles.label}>Mobile Number (Optional)</div>
        </div>
        <div className={styles.inputBox}>
          <input
            type='number'
            placeholder='Enter your mobile number'
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
      </div>

      <div className={styles.fieldBox}>
        <div className={styles.titleBox}>
          <span />
          <div className={styles.label}>Upload Picture (Optional)</div>
        </div>
        <div className={styles.uploadBox}>
          <UploadController needCut maxLength={3} onChange={handleImgOnChange} />
        </div>
      </div>
      <div className={styles.footBox}>
        <div className={styles.linkBtn} onClick={handleOnSubmit}>
          Submit
          <AnimeteRoundedRect4></AnimeteRoundedRect4>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
