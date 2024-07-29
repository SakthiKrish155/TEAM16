import React from 'react';

const Home = () => {
    return (
        <>
            <div className='w-11/12 mx-auto mt-20 border-2 border-primary rounded-3xl p-8'>
                <div className='flex justify-between items-center'>
                    <div className='text-left'>
                        <h1 className='text-6xl text-blue-500 mb-4'>Task And Time Manager</h1><br /><br />
                        <p className='font-bold text-3xl'>
                            Transform the way you work with Desklog <br />
                            Easily track multiple projects with a time tracker, featuring instant <br />
                            reporting. Accurately calculate efficiency, project profit & loss, and <br />
                            precise project billing.
                        </p>
                    </div>
                    <div className='w-2/5'>
                        <img src='https://i.pinimg.com/564x/ca/3c/d1/ca3cd105dc5b54024bb664fc72be1503.jpg' className='rounded-3xl' alt='Task Manager Illustration' />
                    </div>
                </div>
            </div>

            <div className='w-11/12 mx-auto mt-16 p-8'>
                <h2 className='text-4xl font-semibold mb-4 text-blue-500'>Features</h2>
                <ul className='list-disc text-2xl ml-8'>
                    <li>Comprehensive Project Tracking</li>
                    <li>Real-Time Reporting</li>
                    <li>Advanced Time Tracking</li>
                    <li>Customizable Dashboards</li>
                    <li>Team Collaboration Tools</li>
                </ul>
            </div>

            <div className='w-11/12 mx-auto mt-16 p-8'>
                <h2 className='text-4xl font-semibold mb-4 text-blue-500'>Benefits</h2>
                <ul className='list-disc text-2xl ml-8'>
                    <li>Improve Efficiency and Productivity</li>
                    <li>Better Project Management</li>
                    <li>Increased Profitability</li>
                    <li>Enhanced Collaboration</li>
                    <li>Accurate Billing and Invoicing</li>
                </ul>
            </div>

            <div className='w-11/12 mx-auto mt-16 mb-40 p-8'>
                <h2 className='text-4xl font-semibold mb-4 text-blue-500'>Testimonials</h2>
                <div className='text-2xl mb-4'>"Desklog has completely transformed our project management process. The real-time reporting and time tracking features are invaluable." - Jane Doe, Project Manager</div>
                <div className='text-2xl'>"We have seen a significant increase in productivity since implementing Desklog. It's a must-have tool for any team." - John Smith, Team Lead</div>
                
            </div>

            
        </>
    );
}

export default Home;
