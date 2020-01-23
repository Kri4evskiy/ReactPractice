import React from 'react';
import { Formik, Field, Form, useField, FieldAttributes, FieldArray } from 'formik'
import { TextField, Button, Checkbox, Radio, FormControlLabel, Select, MenuItem } from '@material-ui/core'
import * as yup from 'yup'

type MyRadioProps = { label: string } & FieldAttributes<{}>

const MyRadio: React.FC<MyRadioProps> = ({ label, ...props }) => {
  const [field] = useField<{}>(props)

  return (
    <FormControlLabel
      {...field}
      control={<Radio />}
      label={label}
    />
  )
}

const MyTextField: React.FC<FieldAttributes<{}>> = ({ placeholder, ...props }) => {
  const [field, meta] = useField<{}>(props)
  const errorText = meta.error && meta.touched ? meta.error : ''

  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  )
}

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required()
    .max(10),
  pets: yup.array().of(yup.object({
    name: yup.string().required()
  }))
})

const App: React.FC = () => {
  return (

    <div>
      <Formik
        validateOnChange={true}
        initialValues={{
          firstName: '',
          lastName: '',
          isTall: false,
          cookies: [],
          yogurt: '',
          pets: [{ type: 'cat', name: "Саламон", id: '' + Math.random() }]
        }}

        validationSchema={validationSchema}

        // validate={values => {
        //   const errors: Record<string, string> = {}

        //   if (values.firstName.includes('Стас')) {
        //     errors.firstName = 'Нет Стаса'
        //   }

        //   return errors
        // }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true)
          // асинхронный запрос async call
          console.log('submit:', data)
          setSubmitting(false)
        }}
      >
        {({ values, errors, isSubmitting }) => (

          <Form>

            <div>
              Для создания данной учебной формы были использованы следующие пакеты: <br />
              <strong> 'formik', 'yup', '@material-ui/core', '@material-ui/icons' </strong> <br /><br />
            </div>

            <MyTextField placeholder='Имя' name='firstName' />
            {/* <Field placeholder='Имя' name='firstName' type='input' as={TextField} /> */}

            <div>
              <MyTextField placeholder='Фамилия' name='lasttName' type='input' />
              {/* <Field placeholder='Фамилия' name='lasttName' type='input' as={TextField} /> */}
            </div>

            <Field name='isTall' type='checkbox' as={Checkbox} />
            <div>Вкусняшки:</div>
            <Field name='cookies' type='checkbox' value='Шоколад' as={Checkbox} />
            <Field name='cookies' type='checkbox' value='Мороженое' as={Checkbox} />
            <Field name='cookies' type='checkbox' value='Бесквит' as={Checkbox} />

            <div>Йогурт</div>
            <MyRadio name='yogurt' type='radio' value='Клубничный' label='Клубничный' />
            <MyRadio name='yogurt' type='radio' value='Банановый' label='Банановый' />
            <MyRadio name='yogurt' type='radio' value='Черничный' label='Черничный' />
            {/* <Field name='yogurt' type='radio' value='Клубничный' as={MyRadio} />
            <Field name='yogurt' type='radio' value='Банановый' as={MyRadio} />
            <Field name='yogurt' type='radio' value='Черничный' as={MyRadio} /> */}

            <FieldArray name='pets'>
              {(arrayHelpers) => (
                <div>
                  <Button onClick={() => {
                    arrayHelpers.push({
                      type: 'frog',
                      name: '',
                      id: '' + Math.random()
                    })
                  }}
                  >
                    Добавить Зверя
                    </Button>
                  {values.pets.map((pet, index) => {
                    return (
                      <div key={pet.id}>
                        <MyTextField
                          placeholder='Имя Зверя'
                          name={`pets.${index}.name`}
                        />

                        <Field
                          name={`pets.${index}.type`}
                          type='select'
                          as={Select}
                        >
                          <MenuItem value='cat' >Кот</MenuItem>
                          <MenuItem value='dog' >Пёс</MenuItem>
                          <MenuItem value='frog' >Жаба</MenuItem>
                        </Field>

                        <Button onClick={() => arrayHelpers.remove(index)}>
                          X
                        </Button>
                      </div>
                    )
                  })}
                </div>
              )}
            </FieldArray>

            <div>
              <Button disabled={isSubmitting} type='submit'>Submit</Button>
            </div>

            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>

          </Form>
        )}</Formik>
    </div>
  );
}

export default App;
