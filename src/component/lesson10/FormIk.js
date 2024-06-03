
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import React, { useRef } from 'react';
 
 const FormIk = () => (
   <div>
     <Formik
       initialValues={{ email: '', password: '',firstName:'' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required field';
         }
        if(!values.firstName){
            errors.firstName='Required field'
        }
        if(values.password.length<3){
            errors.password='at least 3 characters'
        }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 3));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <div>
            <Field type="text" name="firstName"></Field>
            <label>שם פרטי</label>
            <ErrorMessage name="firstName" component="p" />
           </div>
           <div>
            <Field type="email" name="email" />
            <label>מייל</label>
            <ErrorMessage name="email" component="p" />
           </div>
           <div>
           <Field type="password" name="password" />
           <label>סיסמא</label>
           <ErrorMessage name="password" component="p" />
           </div>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
 );
 
 export default FormIk;