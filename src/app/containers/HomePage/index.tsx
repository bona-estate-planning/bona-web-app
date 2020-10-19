import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { FormWizard } from 'app/components/FormWizard';
import { FormWizardPage } from 'app/components/FormWizard/FormWizardPage';
import { TopNav } from 'app/components/TopNav';
import { PDFDocument } from 'pdf-lib';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormWizardPage1 } from './FormWizardPage1';
import { FormWizardPage2 } from './FormWizardPage2';

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
              <FormWizardPage nextButtonText="Start my Journey!">
                <FormWizardPage1 />
              </FormWizardPage>
              <FormWizardPage submitButtonText="Submit">
                <FormWizardPage2 />
              </FormWizardPage>
            </FormWizard>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
