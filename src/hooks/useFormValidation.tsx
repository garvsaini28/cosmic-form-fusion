
import { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export function useFormValidation() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing again
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    
    // Validate field on blur
    validateField(name as keyof FormData);
  };

  const validateField = (fieldName: keyof FormData) => {
    let newErrors = { ...errors };

    switch (fieldName) {
      case "fullName":
        if (!formData.fullName) {
          newErrors.fullName = "Full name is required";
        } else if (formData.fullName.length < 2) {
          newErrors.fullName = "Full name must be at least 2 characters";
        } else {
          newErrors.fullName = undefined;
        }
        break;

      case "email":
        if (!formData.email) {
          newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Please enter a valid email address";
        } else {
          newErrors.email = undefined;
        }
        break;

      case "password":
        if (!formData.password) {
          newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
          newErrors.password = "Password must be at least 8 characters";
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
          newErrors.password = "Password must include uppercase, lowercase, and a number";
        } else {
          newErrors.password = undefined;
        }
        
        // If confirm password is already entered, validate it again
        if (formData.confirmPassword) {
          if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
          } else {
            newErrors.confirmPassword = undefined;
          }
        }
        break;

      case "confirmPassword":
        if (!formData.confirmPassword) {
          newErrors.confirmPassword = "Please confirm your password";
        } else if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = "Passwords do not match";
        } else {
          newErrors.confirmPassword = undefined;
        }
        break;
    }

    setErrors(newErrors);
  };

  const validateForm = (): boolean => {
    // Validate all fields
    const fieldNames: (keyof FormData)[] = ["fullName", "email", "password", "confirmPassword"];
    
    // Mark all fields as touched
    const allTouched = fieldNames.reduce((acc, field) => {
      return { ...acc, [field]: true };
    }, {});
    
    setTouched(allTouched);
    
    // Validate each field
    fieldNames.forEach(validateField);
    
    // Check if there are any errors after validation
    return !Object.values(errors).some(error => error !== undefined);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const isValid = validateForm();
    
    if (isValid) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", formData);
      
      // You would typically call an API here
      // For demo purposes, we'll just show a success message
      return true;
    }
    
    return false;
  };

  return {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}
