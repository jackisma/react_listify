import { Formik } from 'formik';
import { ReactElement } from 'react';
import { SchemaOf } from 'yup';

import { AppRoutes } from '../../../../app.enums';
import FormikInput from '../../../../shared/components/input/formik-input/formik-input';
import { SignUpFormInitialValues } from '../../auth.interfaces';
import { FormInputContainer, FormLink, FormSubmitButton, FormWrapper, InputLabel } from '../../auth.styled';

interface AuthSignUpFormProps {
  initialValues: SignUpFormInitialValues;
  validationSchema: SchemaOf<SignUpFormInitialValues, never>;
  onSubmit: (values: SignUpFormInitialValues) => Promise<void>;
}

const AuthSignUpForm = ({ initialValues, validationSchema, onSubmit }: AuthSignUpFormProps): ReactElement => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ submitForm, isSubmitting }) => (
        <FormWrapper>
          <FormInputContainer fullWidth variant='standard'>
            <InputLabel htmlFor='name'>Name</InputLabel>
            <FormikInput id='name' name='name' placeholder='Enter your name' />
          </FormInputContainer>
          <FormInputContainer fullWidth variant='standard'>
            <InputLabel htmlFor='email'>Email</InputLabel>
            <FormikInput id='email' name='email' placeholder='Enter your email' type='email' />
          </FormInputContainer>
          <FormInputContainer fullWidth variant='standard'>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <FormikInput id='password' name='password' placeholder='Enter your password' type='password' />
          </FormInputContainer>
          <FormInputContainer fullWidth variant='standard'>
            <InputLabel htmlFor='confirmPassword'>Confirm Password</InputLabel>
            <FormikInput
              id='confirmPassword'
              name='confirmPassword'
              placeholder='Confirm the password'
              type='password'
            />
          </FormInputContainer>
          <FormSubmitButton
            fullWidth
            disabled={isSubmitting}
            type='submit'
            variant='primaryContained'
            onClick={submitForm}
          >
            Create Account
          </FormSubmitButton>
          <FormSubmitButton
            fullWidth
            disabled={isSubmitting}
            type='submit'
            variant='secondaryContained'
            onClick={submitForm}
          >
            Create Account via Google
          </FormSubmitButton>
          <FormLink to={AppRoutes.SignIn}>Already have have an account?</FormLink>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default AuthSignUpForm;