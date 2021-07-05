import React, {useState} from 'react';
import Affairs from './Affairs';
import s from './HW2.module.scss';
// types
export type AffairPriorityType = 'high' | 'low' | 'middle';
export type AffairType = {
  _id: number;
  name: string;
  priority: AffairPriorityType;
};
export type FilterType = 'all' | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
  {_id: 1, name: 'Amazon', priority: 'high'},
  {_id: 2, name: 'Intel', priority: 'low'},
  {_id: 3, name: 'Apple', priority: 'low'},
  {_id: 4, name: 'Google', priority: 'high'},
  {_id: 5, name: 'Microsoft', priority: 'middle'}
];

// pure helper functions
export const filterAffairs = (
  affairs: Array<AffairType>,
  filter: FilterType
): Array<AffairType> => {
  if (filter === 'all') {
    return affairs;
  } else if (filter === 'high') {
    return affairs.filter((a) => a.priority === 'high');
  } else if (filter === 'middle') {
    return affairs.filter((a) => a.priority === 'middle');
  } else {
    return affairs.filter((a) => a.priority === 'low');
  }
};

export const deleteAffair = (
  affairs: Array<AffairType>,
  _id: number
): Array<AffairType> => {
  return affairs.filter((a) => a._id !== _id);
};

function HW2() {
  const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback = (_id: number) =>
    setAffairs(deleteAffair(affairs, _id));

  return (
    <section className={s.affairs}>
      <h2 className={s.title}>Price of stocks</h2>
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />
    </section>
  );
}

export default HW2;
