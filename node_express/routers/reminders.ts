import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminders";
import Reminder from "../models/reminder";

const router = Router();
let reminders: Reminder[] = [];

router.get("/", (req, res) => {
  res.status(200).json(reminders);
});

router.post("/", (req, res) => {
  const title = (req.body as CreateReminderDto).title;
  console.log(title);
  const reminder = new Reminder(title);
  reminders.push(reminder);
  res.status(201).json(reminder);
});

export default router;
