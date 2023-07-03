const roles = [
  {
    name: "admin",
    permissions: ["create-team", "edit-team", "delete-team"],
  },
  {
    name: "coach",
    permissions: ["create-player", "edit-player", "delete-player"],
  },
  {
    name: "player",
    permissions: ["view-team", "view-player"],
  },
];

const permissions = {
  createTeam: "Create a new team",
  editTeam: "Edit an existing team",
  deleteTeam: "Delete an existing team",
  createPlayer: "Create a new player",
  editPlayer: "Edit an existing player",
  deletePlayer: "Delete an existing player",
  viewTeam: "View a team",
  viewPlayer: "View a player",
};

export { roles, permissions };
