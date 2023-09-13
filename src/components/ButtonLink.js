import React from 'react';
import Link from 'next/link';

const ButtonLink = ({ id }) => {
  return <Link className=' bg-lime-700 max-w-[120px] border border-slate-300 border-solid py-2 px-3 rounded-3xl hover:bg-lime-400' href={`/show/${id}`}>View Show</Link>;
};

export default ButtonLink;
