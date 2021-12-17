import React from 'react';
import { Switch } from 'react-router-dom';
import styles from './styles.module.css';

const ContentContainer = ({ Content }) => (
  <div className={styles.content}>
    <Switch>{Content}</Switch>
  </div>
);

export default ContentContainer;
