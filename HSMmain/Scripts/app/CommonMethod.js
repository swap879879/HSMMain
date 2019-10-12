export class CommonVariable {
    constructor() {
        this.ShowMatTable = true;
        this.ShowPanel = false;
        this.ShowSpinner = false;
        this.ShowNoRecordFound = false;
        this.IsDisable = false;
        this.IsDisableSave = false;
        this.Operation = "Add";
    }
    EnableAddFunctionality() {
        this.IsDisable = false;
        this.ShowMatTable = false;
        this.ShowPanel = true;
        this.ShowSpinner = false;
        this.ShowNoRecordFound = false;
        this.IsDisableSave = false;
        this.Operation = "Add";
    }
    EnableBackFunctionality() {
        this.IsDisable = false;
        this.ShowMatTable = true;
        this.ShowPanel = false;
        this.ShowSpinner = false;
        this.ShowNoRecordFound = false;
        this.IsDisableSave = false;
        this.Operation = "Back";
    }
    EnableViewFunctionality() {
        this.IsDisable = true;
        this.ShowMatTable = false;
        this.ShowPanel = true;
        this.ShowSpinner = false;
        this.ShowNoRecordFound = false;
        this.IsDisableSave = true;
        this.Operation = "View";
    }
    EnableEditFunctionality() {
        this.IsDisable = false;
        this.ShowMatTable = false;
        this.ShowPanel = true;
        this.ShowSpinner = false;
        this.ShowNoRecordFound = false;
        this.IsDisableSave = false;
        this.Operation = "Edit";
    }
    EnableDeletFunctionality() {
        this.IsDisable = true;
        this.ShowMatTable = false;
        this.ShowPanel = true;
        this.ShowSpinner = false;
        this.ShowNoRecordFound = false;
        this.IsDisableSave = false;
        this.Operation = "Delete";
    }
}
//# sourceMappingURL=CommonMethod.js.map