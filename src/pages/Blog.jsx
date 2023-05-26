// import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';

const Blog = () => {






  return (
    <>
      {/*  pdf download */}
      <div className=' mt-3 '>

        <PDFDownloadLink document={<PDFDocument></PDFDocument>} fileName="answer.text.pdf">
          <div className="flex justify-center">
            <button className="text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:bg-gradient-to-bl font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2">Download pdf</button>
          </div>
        </PDFDownloadLink>
      </div>



      {/* !---------------------------
             QN AND ANS  card 
            ------------------- --> */}

      <div className=" mt-5 mb-5  ">

        <div className="mx-auto gap-4 grid md:grid-cols-2 lg:w-[90%] lg:grid-cols-2 md:w-[30%] ">

          {/* <!-- -------------------------------
                    no 1   QN and ANS  section 
                ----------------- --> */}
          <div className="  card w-full bg-purple-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">What differences between uncontrolled and controlled components ?</h2>
              <p>
                An uncontrolled component in React is a form element whose value is dictated by the user's input. React has no control over the state of the component. A controlled component, on the other hand, is a form element whose value is set and maintained by React. React manages the state of the component. Controlled components provide greater control over form state, allowing for validation and error handling. They do, however, necessitate more code than uncontrolled components. Uncontrolled components are easier to set up and can be useful for simple forms without validation.
              </p>
            </div>
          </div>

          {/* <!----------------------------------
                     no 2   QN and ANS  section  
                    -----------------------------> */}

          <div className=" card w-full bg-blue-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title"> How to validate React props using PropTypes ? </h2>
              <p>
                PropTypes is a typechecking library for defining the types and shapes of expected props in a React component. PropTypes may be used to validate props by importing it from the 'prop-types' package and defining the anticipated prop types in the component's propTypes object. PropTypes.string, for example, can be used to confirm that a prop is a string. Similarly, you may use PropTypes.isRequired to confirm that a prop is necessary. There are several different prop types available, including PropTypes.number, PropTypes.bool, PropTypes.array, and PropTypes.object. You may discover issues early and guarantee that your component is utilized appropriately by specifying prop types.
              </p>

            </div>
          </div>

          {/* <!------------------------------- 
                    no 3   QN and ANS  section
                  --------------------------------> */}

          <div className=" bg-cyan-100 card w-full shadow-xl">
            <div className="card-body">
              <h2 className="card-title"> What difference between nodejs and express js ?</h2>
              <p>
                {/* Node.js is a run-time environment for building server-side event-driven i/o application using javascript. On the other hand ,
                Express.js is a framework based on node.js for building web-application using principles and approaches of node.js . Express js is built on top of the Node.js framework. */}

                Node.js is an open-source server-side JavaScript runtime environment that executes JavaScript code outside of a browser. It has a collection of built-in modules that you may use without the need for a third-party library.

                Express.js, on the other hand, is a popular open-source web application framework built on Node.js. It has a number of extra capabilities that make it easier to construct online applications and APIs, such as routing, middleware, and HTTP utility methods.

                In other words, Node.js is a JavaScript runtime environment, but Express.js is a framework that runs on top of Node.js, giving extra functionality to make creating web apps easier.

              </p>

            </div>
          </div>

          {/* <!-------------------------------
                     no 4   QN and ANS  section  
                    ------------------------------------> */}

          <div className=" bg-emerald-100 card w-full  shadow-xl">
            <div className="card-body">
              <h2 className="card-title">What is a custom hook , and why will you create a custom hook ?</h2>
              <p>A custom hook is a JavaScript function that extracts and reuses code in a React application. Custom hooks can be used to construct reusable logic for tasks such as data retrieval, state management, and handling side effects.
                To prevent duplicating same code across different components, I would develop a custom hook. Custom hooks can help me structure my code and decrease redundancy, making it more manageable. Furthermore, custom hooks can facilitate code sharing between different components or even different projects.
              </p>

            </div>
          </div>

        </div>


      </div>
      <div >

      </div>
    </>
  );
};

export default Blog;