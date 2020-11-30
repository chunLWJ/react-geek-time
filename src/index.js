import {useReducer} from 'react'
import {render} from 'react-dom'
import './index.css'
import {Hello} from "./Hello";
import {ChatApp} from "./c01/ChatApp";
import {CommentBox} from "./c02/CommentBox";
import {TabSelectorSample} from "./c02/TabSelector";
import {StatefulTabSelectSample} from "./c02/StatefulTabSelector";

const routeMap = {
    chat: ChatApp,
    "comment-box": CommentBox,
    "tab-selector": TabSelectorSample,
    "stateful-tab-selector": StatefulTabSelectSample,
    // "snapshot-sample": SnapshotSample,
    // "dom-diff": DomDiff,
    // "adv-tab-selector": AdvancedTabSelectorSample,
    // "locale-sample": LocaleSample,
    // clock: Clock,
    // "pure-redux": PureRedux,
    // counter: Counter,
    // "async-action": AsyncAction,
    // "redux-middleware": ReduxMiddleware,
    // "org-actions": OrgActions,
    // "router-sample": RouterSample,
    // "router-params": RouterParams,
    // "nested-route": NestedRoute,
    // "form-submit": FormSubmit,
    // "form-submit-antd": FormSubmitAntd,
    // "dynamic-form": DynamicForm,
    // "list-page": ListSample,
    // "wizard-sample": WizardSample,
    // layout1: Layout1,
    // layout2: Layout2,
    // "layout-resize": LayoutResize,
    // "portal-sample": PortalSample,
    // "antd-dialog": AntdDialog,
    // "d3-sample": D3Sample,
    // "dnd-sample": DndSample,
    // "reselect-sample": ReselectSample,
    // suspense: Suspense,
}
const styles = {
    fontFamily: "sans-serif",
    paddingLeft: "250px",
};

function App(){
    const [,forceUpdate] = useReducer(x => x+1, 0)
    const currentPage = document.location.hash.replace(/#\/?/, "");
    let CurrentPage = routeMap[currentPage] || Hello;

    let handleLinkClick = function(key) {
        window.history.pushState(null,"",`/#/${key}`)
        forceUpdate()
    }
    return (
        <div style={styles}>
            <ul className="menu-list">
                {Object.keys(routeMap).map(key => (
                    <li
                        key={key}
                        className={key === currentPage ? "is-active" : ""}
                        style={{ listStyle: "none" }}
                    >
                        <span className="link" onClick={() => handleLinkClick(key)}>
                            {key}
                        </span>
                    </li>
                ))}
            </ul>
            <div style={{ padding: "30px 0" }}>
                <CurrentPage />
            </div>
        </div>
    )
}

render(<App />,document.getElementById('root'))
