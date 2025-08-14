// frontend/src/components/RoleCard.jsx
import { Link } from "react-router-dom";

export default function RoleCard({ role }) {
  return (
    <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
      {role.heroImage && (
        <img
          src={role.heroImage}
          alt={role.title}
          className="w-full h-40 object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="text-lg font-semibold">{role.title}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{role.summary}</p>

        <Link
          to={`/role/${role.id}`}
          className="inline-block mt-4 rounded-lg px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700"
        >
          View details
        </Link>
      </div>
    </div>
  );
}
