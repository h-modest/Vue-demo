import _ from 'underscore';
import moment from 'moment';

export function timestamp(t) {
  if (t) {
    return +new Date(t);
  } else {
    return +new Date();
  }
}

export function log(type, ...messages) {
  let t = moment();
  let time = t.format('HH:mm:ss.SSS');
  if (_.isUndefined(type)) {
    type = 'common';
  }
  let logger;
  if (/err/.test(type)) {
    logger = 'error';
  } else if (/info/.test(type)) {
    logger = 'info';
  } else {
    logger = 'log';
  }
  let params = [
    '%c[' + time + '] %c' + type + '%c',
    'color: blue',
    'color: #999',
    'color: #000',
  ];
  if (process.env.NODE_ENV != 'production') {
    console[logger].apply(console, params.concat(messages));
  }
}

log.error = (message) => {
  log('error', message);
};

log.info = (message) => {
  log('info', message);
};

log.log = (message) => {
  log('log', message);
};
