import { vi } from 'vitest';

export const COMMON_DEFAULT_FORMIK_INSTANCE = {
  formikInstance: {
    dirty: false,
    values: vi.fn(),
    touched: vi.fn(),
    isSubmitting: false,
    isValidating: false,
    submitCount: 0,
    errors: vi.fn(),
    isValid: true,
    initialValues: vi.fn(),
    initialErrors: vi.fn(),
    initialTouched: vi.fn(),
    getFieldHelpers: vi.fn(),
    getFieldMeta: vi.fn(),
    getFieldProps: () => vi.fn(),
    handleBlur: vi.fn(),
    handleChange: vi.fn(),
    handleReset: vi.fn(),
    handleSubmit: vi.fn(),
    setStatus: vi.fn(),
    setErrors: vi.fn(),
    setSubmitting: vi.fn(),
    setTouched: vi.fn(),
    setValues: vi.fn(),
    setFieldValue: vi.fn(),
    setFieldError: vi.fn(),
    setFieldTouched: vi.fn(),
    validateForm: vi.fn(),
    validateField: vi.fn(),
    resetForm: vi.fn(),
    submitForm: vi.fn(),
    setFormikState: vi.fn(),
    registerField: vi.fn(),
    unregisterField: vi.fn(),
  },
};
