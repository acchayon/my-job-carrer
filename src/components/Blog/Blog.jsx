import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='text-center h-32 bg-slate-50'>
                <h1 className='text-3xl '>Blogs</h1>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow w-3/4 bg-gray-50 mx-auto border border-base-300 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    1.  When should you use context API?
                </div>
                <div className="collapse-content">
                    <p>We can pass props from parents to child in one way data flow.But when our target child stay in far away form parents components then we need declare and destructure props in every child components and this is very annoying for developers.And this system name is props drilling. <br />
                        Context Api is the solve of props drilling problem. Because, in context api we dont forward props all kind of child. We create a context file in parent component and direct get all data or context in target component.
                        So, when our target components are stand in many far away then we use context api.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow w-3/4 bg-gray-50 mx-auto border border-base-300 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    2.   What is a custom hook?
                </div>
                <div className="collapse-content">
                    <p>
                        CustomHook is a simple javascript function in react. In react there is many hooks and all hooks are use at first "use". So, this is here, useCustom hook.Custom hook is impportent for us because when we need to share some logic in react then we need custom hook.It share logic functional component. <br />
                        By creating a custom hook, you can abstract away the details of how the logic works, and provide a simple interface that other developers can use in their components. <br />
                        To create a customhook, we can write a function one or more built in react hoooks.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow w-3/4 bg-gray-50 mx-auto border border-base-300 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    3.   What is useRef?
                </div>
                <div className="collapse-content">
                    <p>
                        Sometimes, we need to direct manipulate dom using by state and props but they are not working this moments.
                        In the use of useRef , we can manipulate dom directly. <br />
                        UseRef is a simple react hook who refer a mutable reference. It is a generic container who contain any value and contain a special property which is no change whne we update it. <br />
                        React does not consider it to be a change to the component state, so it does not trigger a re-render.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow w-3/4 bg-gray-50 mx-auto border border-base-300 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    4.   What is useMemo?
                </div>
                <div className="collapse-content">
                    <p>
                        useMemo is a very powerfull things which is used for increase our application. Sometimes in our react appliaction we make many function but many of them dontuse other time which is unnecssary file for us. And which functions are call every time. In this situation, our application are getting slowly. <br />
                        In this problem solve we use useMemo. By using useMemo to memoize the result of the function, we ensure that the random number is only generated once when the component is mounted, and reused on subsequent renders as long as the dependencies haven't changed.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;