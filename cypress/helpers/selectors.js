export const hiringBoard = {
  crewMember: {
    container: ({ uuid = '', column } = {}) =>
      `${
        column ? `[data-testid="column-${column}"]` : ''
      } [data-testid^="crew-member-container-${uuid}"]`,
    photo: (params) =>
      `${hiringBoard.crewMember.container(
        params,
      )} [data-testid^="crew-member-photo-${uuid}"]`,
    infoText: (params) =>
      `${hiringBoard.crewMember.container(
        params,
      )} [data-testid^="crew-member-info-text-${uuid}"]`,
    upButton: (params) =>
      `${hiringBoard.crewMember.container(
        params,
      )} [data-testid="button-up-satge"]`,
    downButton: (params) =>
      `${hiringBoard.crewMember.container(
        params,
      )} [data-testid="button-down-satge"]`,
  },
}

export const filterCrewMember = {
  name: {
    input: '[data-testid="input-name"]',
  },
  city: {
    input: '[data-testid="input-city"]',
  },
  submitButton: '[data-testid="submit-button]',
  clearButton: '[data-testid="clear-button]',
}
