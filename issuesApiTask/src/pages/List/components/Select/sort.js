function SortBox({}) {
    return (
        <select>
            <option key="created" value="created">
                생성순
            </option>
            <option key="updated" value="updated">
                업데이트순
            </option>
            <option key="comments" value="comments">
                댓글순
            </option>
        </select>
    );
}
export default SortBox;
