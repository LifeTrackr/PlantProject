import moment, { suppressDeprecationWarnings } from "moment";
import { duration } from "moment";
import { getCompanions, getEvents } from "../redux/reducers/companions";
import { useDispatch, useSelector } from "react-redux";

export const getPercentage = (time, freq) => {
  let now = moment().format();
  let nextTrigger = moment(time).format();
  let difference = moment(nextTrigger).diff(now, "minutes");
  let frequency = freq / 60 / 60;
  let percentage = (difference / frequency) * 100 + "%";
  console.log(percentage);
  return percentage;
};

export const getTime = (time) => {
  let lastTrigger = moment(time).format();
  let dateType = "";
  let now = moment().format();
  let duration = moment(now).diff(lastTrigger, "minutes");
  dateType = "min";
  if (duration > 60) {
    duration = moment(now).diff(lastTrigger, "hours");
    dateType = "hr";
    if (duration > 24) {
      duration = moment(now).diff(lastTrigger, "days");
      dateType = "d";
      if (duration > 30) {
        duration = moment(now).diff(lastTrigger, "months");
        dateType = "m";
      }
    }
  }
  return { duration, dateType };
};

export const getFrequency = (freq) => {
  let frequency = (freq / 60 / 60).toFixed(1);
  let dataType = "minutes";
  if (frequency > 60) {
    frequency = (frequency / 60).toFixed(1);
    dataType = "hours";
    if (frequency > 24) {
      frequency = (frequency / 24).toFixed(1);
      dataType = "days";
      if (frequency > 31) {
        frequency = (frequency / 30).toFixed(1);
        dataType = "months";
      }
    }
  }
  return { frequency, dataType };
};

export const getIcon = (type) => {
  let icon = "";
  if (type == "water") {
    return ["water-outline", "#83E7FD"];
  }
  if (type == "fertilize") {
    return ["flower-tulip-outline", "#C0A850"];
  }
  if (type == "repot") {
    return ["shovel", "#A87E11"];
  }
  if (type == "feed") {
    return ["silverware", "#ECEF65"];
  }
  if (type == "walk") {
    return ["walk", "#E2BDFF"];
  }
  if (type == "groom") {
    return ["gamepad-circle-outline", "#99F49C"];
  }
  if (type == "play") {
    return ["soccer", "#FF986C"];
  }
  if (type == "mist") {
    return ["watering-can-outline", "#9B6C25"];
  }
  if (type == "clean") {
    return ["shower-head", "#12C9B3"];
  }
};

export const getTypeIcon = (type) => {
  let icon = "";
  if (type == "dog" || type == "cat") {
    return "paw";
  }
  if (type == "plant") {
    return "leaf";
  }
  if (type == "reptile") {
    return "tortoise";
  }
  return null;
};

export const fetchData = (token, dispatch) => {
  dispatch(getCompanions(token));
  dispatch(getEvents(token));
};
