export const state = () => ({
  team_modal_open: false,
  selected_team_member: {},
  footer_cta_visible: true,
});

export const mutations = {
  setTeamModalOpen(state, bool) {
    state.team_modal_open = bool;
  },
  setSelectedTeamMember(state, object) {
    state.selected_team_member = object;
  },
  setFooterCtaVisible(state, bool) {
    state.footer_cta_visible = bool;
  },
};
