import { Link } from "react-router-dom";

export default function InboxPage() {
  return (
    <div>
      <p>Inbox Page</p>

      <Link to="/messaging">Message a User</Link>
    </div>
  );
}
