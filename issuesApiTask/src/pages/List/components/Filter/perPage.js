function PerPageBox({}) {
    return (
        <select>
            <option key="10" value="10">
                10개씩
            </option>
            <option key="20" value="20">
                20개씩
            </option>
            <option key="50" value="50">
                50개씩
            </option>
        </select>
    );
}
export default PerPageBox;
