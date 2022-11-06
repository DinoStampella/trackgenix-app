import { useState, useEffect } from 'react';
import Table from '../Share/Table';
import styles from './tasks.module.css';

function Tasks() {
  const [list, setList] = useState([]);
  useEffect(async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/task`);
    const data = await response.json();
    setList(data.data || []);
  }, []);
  return (
    <section className={styles.container}>
      <Table headers={['description', 'createdAt', 'updatedAt']} data={list} entitie={'tasks'} />
    </section>
  );
}

export default Tasks;
