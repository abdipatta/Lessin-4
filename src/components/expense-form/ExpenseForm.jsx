import PropTypes from "prop-types"
import { Button } from "../UI/Button/Button";
import { FormInput } from "../UI/Form-input/FormInput";
export const ExpenseForm = ({onShowForm}) => {
  const submitHandler=(e)=>{
e.preventDefault();
alert("Отправено")
  } 
  const canselHandler=(e)=>{
    e.preventDefault();
    onShowForm()
  }
  return (
    <form>
      <FormInput
        id="f1"
        label="Заголовок"
        inputType="text"
        placeholder="Напишите расход"
      />
      <FormInput
        id="f2"
        label="Цена"
        inputType="number"
        placeholder="Напишите цену"
      />
        <FormInput
        id="f3"
        label="Дата"
        inputType="date"
        placeholder="ММ.ДД.ГГГГ"
      />
      <Button text='Добавить' onClick={submitHandler}/>
      <Button text='Отмена' onClick={canselHandler}/>
    </form>
  );
};

ExpenseForm.PropTypes={
  onShowForm:PropTypes.func,
}