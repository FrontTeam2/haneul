import { Axios } from "./core";

const IssueApi = {
    getIssue() {
        return Axios.get(`/repos/angular/angular-cli/issues`);
    },
};

export default IssueApi;
