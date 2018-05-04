import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

function FormFields(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Input
        placeholder="Pair"
        defaultValue="XRP"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        placeholder="Placeholder"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        value="Disabled"
        className={classes.input}
        disabled
        inputProps={{
          'aria-label': 'Description',
        }}
      />
    </div>
  );
}

FormFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormFields);