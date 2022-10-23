import { hasGrantedAnyScopeGoogle } from "@react-oauth/google";

const CalendarPermisssion = ({ tokenResponse }) => {
  const hasAccess = hasGrantedAnyScopeGoogle(
    tokenResponse,
    "https://www.googleapis.com/auth/calendar.events",
    "https://www.googleapis.com/auth/calendar"
  );

  return (
    <div>
      <p className="text">
        {hasAccess
          ? "All good to edit calendar!"
          : "To add recursive event to your calendar"}
      </p>
    </div>
  );
};

export default CalendarPermisssion;
