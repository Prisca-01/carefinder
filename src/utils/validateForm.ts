interface FormValues {
    hospitalName: string;
    address: string;
    city: string;
    state: string;
    phoneNumber: string;
    email: string;
    website?: string;
    category: string;
    description: string;
  }
  
  export default function validateForm(values: FormValues) {
    const errors: { [key: string]: string } = {};
  
    if (!values.hospitalName.trim()) {
      errors.hospitalName = 'Hospital name is required';
    }
  
    if (!values.address.trim()) {
      errors.address = 'Address is required';
    }
  
    if (!values.city.trim()) {
      errors.city = 'City is required';
    }
  
    if (!values.state) {
      errors.state = 'State is required';
    }
  
    if (!values.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10,11}$/.test(values.phoneNumber)) {
      errors.phoneNumber = 'Phone number must be 10 or 11 digits';
    }
  
    if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
    if (values.website && !/^https?:\/\/.+\..+$/.test(values.website)) {
      errors.website = 'Website URL is invalid';
    }
  
    if (!values.category) {
      errors.category = 'Category is required';
    }
  
    if (!values.description.trim()) {
      errors.description = 'Description is required';
    }
  
    return errors;
  }  