import BarCharts from '@/components/Admin/BarCharts';
import React from 'react'


const Admin = () => {
  return (
    <div className="h-full w-5/6 p-4 flex flex-col gap-y-60">
      <div className="flex justify-center items-center">
        <BarCharts/>
      </div>
    </div>
  );
};

export default Admin;
