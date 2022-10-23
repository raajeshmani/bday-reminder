import { useEffect, useState } from "react";

const AddEventToCalendar = ({ email, accessToken }) => {
  const [eventAdditionStatus, setEventAdditionStatus] = useState(false);
  const [summary, setSummary] = useState("");
  const [date, setDate] = useState("");

  const populatedEvent = (summary, date) => {
    return {
      summary: summary,
      description: "Call them at 12 and do your thing",
      start: {
        date: date,
        timeZone: "Asia/Calcutta",
      },
      end: {
        date: date,
        timeZone: "Asia/Calcutta",
      },
      recurrence: ["RRULE:FREQ=YEARLY"],
      reminders: {
        useDefault: false,
        overrides: [
          {
            method: "popup",
            minutes: 5,
          },
        ],
      },
      colorId: 11,
      transparency: "transparent",
    };
  };

  const addEventToCalendar = () => {
    const event = populatedEvent(summary, date);

    const RAAJESH_CUSTOM_CALENDAR_ID =
      "6b536e0d3454602b435376c579693ff09c1f025fd624372c8d8aec59ecd6f2ac@group.calendar.google.com";

    fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${
        email === "raajeshmani19@gmail.com"
          ? RAAJESH_CUSTOM_CALENDAR_ID
          : "primary"
      }/events`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${accessToken}` },
        body: JSON.stringify(event),
      }
    )
      .then((response) => response.json())
      .then((status) => setEventAdditionStatus(true));
  };

  useEffect(() => {
    setTimeout(() => {
      setEventAdditionStatus(false);
    }, 3000);
  }, [eventAdditionStatus]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        className="input"
        aria-label="Summary"
        placeholder="Enter reminder text "
        onChange={(e) => setSummary(e.target.value)}
      ></input>
      <input
        className="input"
        aria-label="date"
        type={"date"}
        onChange={(e) => setDate(e.target.value)}
      ></input>
      <button className="button" onClick={addEventToCalendar}>
        Add event to calendar
      </button>
      <div style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
        {eventAdditionStatus && (
          <p className="text">Calendar event has been successfully added!</p>
        )}
      </div>
    </div>
  );
};

export default AddEventToCalendar;
