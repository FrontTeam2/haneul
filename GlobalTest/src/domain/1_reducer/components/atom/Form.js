import useInputs from "../../../../utils/useInputs";

const Q1Form = ({ onSubmit }) => {
    const [{ name, price }, onChange] = useInputs("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(name, price);
            }}
        >
            <label>
                <input
                    type="text"
                    name="name"
                    onChange={onChange}
                    placeholder="재료"
                />
            </label>
            <label>
                <input
                    type="number"
                    name="price"
                    onChange={onChange}
                    placeholder="가격"
                />
            </label>
            <button type="submit">추가</button>
        </form>
    );
};
export default Q1Form;
