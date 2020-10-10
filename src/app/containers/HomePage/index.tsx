import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { FormWizard } from 'app/components/FormWizard';
import { FormWizardPage } from 'app/components/FormWizard/FormWizardPage';
import { TopNav } from 'app/components/TopNav';
import React from 'react';
import { Field } from 'react-final-form';
import { Helmet } from 'react-helmet-async';
import { PDFDocument } from 'pdf-lib';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

var saveByteArray = (function () {
  var a = document.createElement('a');
  document.body.appendChild(a);
  // a.style = 'display: none';
  return function (data, name) {
    var blob = new Blob(data, { type: 'octet/stream' }),
      url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = name;
    a.click();
    window.URL.revokeObjectURL(url);
  };
})();

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, null, 2));

  const pdfDoc = await PDFDocument.create();

  const page = pdfDoc.addPage();
  const { height } = page.getSize();
  const fontSize = 30;
  page.drawText('Hello World!', {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
  });

  let n = 2;
  for (const field in values) {
    if (Object.prototype.hasOwnProperty.call(values, field)) {
      const value = values[field];
      page.drawText(`${field}: ${value}`, {
        x: 50,
        y: height - 4 * fontSize * n,
        size: fontSize,
      });
      n++;
    }
  }
  const pdfBytes = await pdfDoc.save();

  console.log(pdfBytes);
  saveByteArray([pdfBytes], 'example.pdf');
};

// const Error = ({ name }) => (
//   <Field
//     name={name}
//     subscribe={{ touched: true, error: true }}
//     render={({ meta: { touched, error } }) =>
//       touched && error ? <span>{error}</span> : null
//     }
//   />
// );

const required = value => (value ? undefined : 'Required');

const useStyles = makeStyles(theme => ({
  containerRoot: {
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      padding: '180px 0',
    },
  },
  formContainer: {
    padding: '70px 20px',
    [theme.breakpoints.up('md')]: {
      padding: '50px 70px',
    },
  },
  page2: {
    textAlign: 'center',
  },
}));

export function HomePage() {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <TopNav />
      <Grid
        className={classes.containerRoot}
        container
        direction="row"
        justify="center"
      >
        <Grid item xs={12} md={6}>
          <Paper className={classes.formContainer} elevation={isMd ? 2 : 0}>
            <FormWizard
              initialValues={{ userInput: 'Test' }}
              onSubmit={onSubmit}
            >
              <FormWizardPage
                validate={() => undefined}
                nextButtonText="Start my journey!"
              >
                <Box
                  component="svg"
                  css={{ display: 'block', height: 120, width: 120 }}
                  mx="auto"
                  mb={isMd ? 4 : 3}
                >
                  <circle cx="60" cy="60" r="60" fill="#F3F3F3" />
                </Box>
                <Box mb={isMd ? 4 : 3}>
                  <Typography component="h2" variant="h5">
                    Let’s start on your guardianship journey!
                  </Typography>
                </Box>
                <Box mb={isMd ? 4 : 3}>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                </Box>
                <Box mb={isMd ? 4 : 8}>
                  <Typography variant="body1">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                </Box>
              </FormWizardPage>
              <FormWizardPage
                validate={() => undefined}
                submitButtonText="Submit"
              >
                <Box className={classes.page2} mb={4}>
                  <Box mb={isMd ? 4 : 3}>
                    <Typography component="h2" variant="h5">
                      Question one is lorem ipsum dolor ipsum?
                    </Typography>
                  </Box>
                  <Field
                    name="userInput"
                    component="input"
                    type="text"
                    label="User Input"
                    validate={required}
                  />
                </Box>
              </FormWizardPage>
            </FormWizard>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
