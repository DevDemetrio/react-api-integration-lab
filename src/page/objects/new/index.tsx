import { Button, TextField } from "@mui/material";
import { useObjectForm } from "./useObjectForm";
import { Form, Wrapper } from "./styles";

export function NewObject() {
  const {
    Controller,
    control,
    handleSubmit,
    errors,

    handleSubmitForm,
  } = useObjectForm();

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Name"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
        <Controller
          name="data.year"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Ano"
              fullWidth
              error={!!errors.data?.year}
              helperText={errors.data?.year?.message}
            />
          )}
        />

        <Controller
          name="data.price"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Preço"
              fullWidth
              error={!!errors.data?.price}
              helperText={errors.data?.price?.message}
            />
          )}
        />

        <Controller
          name="data.cpuModel"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Model CPU"
              fullWidth
              error={!!errors.data?.price}
              helperText={errors.data?.cpuModel?.message}
            />
          )}
        />

        <Controller
          name="data.hardDiskSize"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Capacidade"
              fullWidth
              error={!!errors.data?.hardDiskSize}
              helperText={errors.data?.hardDiskSize?.message}
            />
          )}
        />

        <Button type="submit">Enviar</Button>
      </Form>
      pode simta
    </Wrapper>
  );
}

// {
//     "name": "Apple MacBook Pro 16",
//     "data": {
//       "year": 2019,
//       "price": 1849.99,
//       "CPU model": "Intel Core i9",
//       "Hard disk size": "1 TB"
//     }
//   }
