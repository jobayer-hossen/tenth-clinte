import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    con: { padding: "30px", position: "relative" },
    qn: { fontSize: "30px", fontWeight: "500", display: "block" },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
    section: { color: "white", textAlign: "center", margin: 30 },
});

const PDFDocument = () => {


    // hard core data     -----------------



    return (
        <Document>
            <Page style={styles.con}>
                <Text style={styles.qn}>
                    What differences between uncontrolled and controlled components ?
                </Text>
                <Text>
                    An uncontrolled component in React is a form element whose value is dictated by the user's input. React has no control over the state of the component. A controlled component, on the other hand, is a form element whose value is set and maintained by React. React manages the state of the component. Controlled components provide greater control over form state, allowing for validation and error handling. They do, however, necessitate more code than uncontrolled components. Uncontrolled components are easier to set up and can be useful for simple forms without validation.
                </Text>
                <Text style={styles.qn}>
                    How to validate React props using PropTypes ?
                </Text>
                <Text>
                    PropTypes is a typechecking library for defining the types and shapes of expected props in a React component. PropTypes may be used to validate props by importing it from the 'prop-types' package and defining the anticipated prop types in the component's propTypes object. PropTypes.string, for example, can be used to confirm that a prop is a string. Similarly, you may use PropTypes.isRequired to confirm that a prop is necessary. There are several different prop types available, including PropTypes.number, PropTypes.bool, PropTypes.array, and PropTypes.object. You may discover issues early and guarantee that your component is utilized appropriately by specifying prop types.
                </Text>
                <Text style={styles.qn}>
                    What difference between nodejs and express js ?
                </Text>
                <Text>
                    Node.js is an open-source server-side JavaScript runtime environment that executes JavaScript code outside of a browser. It has a collection of built-in modules that you may use without the need for a third-party library.

                    Express.js, on the other hand, is a popular open-source web application framework built on Node.js. It has a number of extra capabilities that make it easier to construct online applications and APIs, such as routing, middleware, and HTTP utility methods.

                    In other words, Node.js is a JavaScript runtime environment, but Express.js is a framework that runs on top of Node.js, giving extra functionality to make creating web apps easier.
                </Text>
                <Text style={styles.qn}>
                    What is a custom hook , and why will you create a custom hook ?
                </Text>
                <Text>
                    A custom hook is a JavaScript function that extracts and reuses code in a React application. Custom hooks can be used to construct reusable logic for tasks such as data retrieval, state management, and handling side effects.
                    To prevent duplicating same code across different components, I would develop a custom hook. Custom hooks can help me structure my code and decrease redundancy, making it more manageable. Furthermore, custom hooks can facilitate code sharing between different components or even different projects.
                </Text>

                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        ` ${pageNumber} / ${totalPages}`
                    }
                    fixed
                />
            </Page>
        </Document>
    );
};

export default PDFDocument;