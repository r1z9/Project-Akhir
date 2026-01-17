class DashboardPage {
  directoryMenu = 'a[href="/web/index.php/directory/viewDirectory"]';

  clickDirectory() {
    cy.get(this.directoryMenu).click();
  }
}

export default new DashboardPage();
