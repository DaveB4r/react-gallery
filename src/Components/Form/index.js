import { Button, Label, TextInput } from "flowbite-react";

const Form = ({ elements ,handleSubmit}) => {
  
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-md flex-col gap-4"
    >
      {elements.map(element => (
        <div key={element.label}>
          <div className="mb-2 block">
            <Label
              htmlFor={element.label}
              value={element.label}
              className='capitalize'
            />
          </div>
          <TextInput
            id={element.label}
            required
            type={element.input.type}
            onChange={element.input.onChange}
          />
        </div>
      ))}

      <Button type='submit'>
        Submit
      </Button>
    </form>
  );
}

export default Form;
