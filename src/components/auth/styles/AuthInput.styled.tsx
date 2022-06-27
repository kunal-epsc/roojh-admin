import { FormControl, InputBase, Typography, styled } from "@mui/material";

const StyledInputBase = styled(InputBase)({
  backgroundColor: "#EFF3FF",
  borderRadius: "30px",
  padding: "10px 20px",
  border: "1px solid #D3D8E5",
});

export default function AuthInput(props: {
  type: string;
  content: string;
  errorMessage?: string
  value: string;
  placeholder: string;
  marginBottom: string;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
}) {
  return (
      <FormControl fullWidth sx={{ marginBottom: props.marginBottom }}>
        <Typography variant="subtitle2" marginBottom={0.5}>
          {props.content}
        </Typography>
        <StyledInputBase
          fullWidth
          id={props.content}
          name={props.content}
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
        />
        <Typography variant="subtitle2" color="error">{props.errorMessage}</Typography>
      </FormControl>
  );
}
