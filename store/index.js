export const state = () => ({
  team_modal_open: false,
  selected_team_member: {},
});

export const mutations = {
  setTeamModalOpen(state, bool) {
    state.team_modal_open = bool;
  },
  setSelectedTeamMember(state, object) {
    state.selected_team_member = object;
  },
};
