const rolesData = [
    {
        id: 1,
        name: "Admin",
        permissions: ["create", "read", "update", "delete"]
    },
    {
        id: 2,
        name: "User",
        permissions: ["read"]
    },
    {
        id: 3,
        name: "Moderator",
        permissions: ["read", "update"]
    },
    {
        id: 4,
        name: "Guest",
        permissions: ["read"]
    }
];

export default rolesData;