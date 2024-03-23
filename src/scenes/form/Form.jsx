import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { Box, TextField, useMediaQuery } from "@mui/material";
import Header from "../../components/Header";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(3, "Minimun Characters are 3")
      .max(12, "Maximum Characters are 12")
      .required(),
    lastName: Yup.string()
      .min("Minimun Characters are 3")
      .max("Maximum Characters are 12")
      .required(),
    email: Yup.string().email("Invalid Email").required(),
    contact: Yup.string().required(),
    address1: Yup.string().required(),
    address2: Yup.string().required(),
  });

  const profileForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      address1: "",
      address2: "",
    },
    validationSchema,
    onSubmit: (x) => console.log(x),
  });
  return (
    <Box m={"20px"}>
      <Header title={"CREATE USER"} subtitle={"Create New User Profile"} />
      <form onSubmit={profileForm.handleSubmit}>
        <Box
          display={"grid"}
          gap={"10px"}
          gridTemplateColumns={"repeat(4,minmax(0,1fr))"}
          sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" } }}
        >
          <TextField
            fullWidth
            variant="filled"
            type="text"
            value={profileForm.values.firstName}
            name="firstName"
            id="First Name"
            label={"First Name"}
            onChange={profileForm.handleChange}
            onBlur={profileForm.handleBlur}
            error={
              !!profileForm.errors.firstName && !!profileForm.touched.firstName
            }
            helperText={
              profileForm.errors.firstName && profileForm.touched.firstName
            }
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            value={profileForm.values.lastName}
            name="lastName"
            id="Last Name"
            label={"Last Name"}
            onChange={profileForm.handleChange}
            onBlur={profileForm.handleBlur}
            error={
              !!profileForm.errors.lastName && !!profileForm.touched.lastName
            }
            helperText={
              profileForm.errors.lastName && profileForm.touched.lastName
            }
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="email"
            value={profileForm.values.email}
            name="email"
            id="Email"
            label={"Email"}
            onChange={profileForm.handleChange}
            onBlur={profileForm.handleBlur}
            error={!!profileForm.errors.email && !!profileForm.touched.email}
            helperText={profileForm.errors.email && profileForm.touched.email}
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            value={profileForm.values.contact}
            name="contact"
            id="Contact"
            label={"contact"}
            onChange={profileForm.handleChange}
            onBlur={profileForm.handleBlur}
            error={
              !!profileForm.errors.contact && !!profileForm.touched.contact
            }
            helperText={
              profileForm.errors.contact && profileForm.touched.contact
            }
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            value={profileForm.values.address1}
            name="address1"
            id="Address1"
            label={"Address1"}
            onChange={profileForm.handleChange}
            onBlur={profileForm.handleBlur}
            error={
              !!profileForm.errors.address1 && !!profileForm.touched.address1
            }
            helperText={
              profileForm.errors.address1 && profileForm.touched.address1
            }
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            value={profileForm.values.address2}
            name="address2"
            id="Address2"
            label={"Address2"}
            onChange={profileForm.handleChange}
            onBlur={profileForm.handleBlur}
            error={
              !!profileForm.errors.address2 && !!profileForm.touched.address2
            }
            helperText={
              profileForm.errors.address2 && profileForm.touched.address2
            }
            sx={{ gridColumn: "span 4" }}
          />
        </Box>
      </form>
    </Box>
  );
};

export default Form;
