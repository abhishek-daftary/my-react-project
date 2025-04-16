import { FC } from 'react';
import {
  StoreCard,
  StoreDate,
  StoreEdit,
  StoreImportant,
  StoreInformation,
  StoreParagraph,
  StoreTitle,
  StoreVisible,
} from './StoreCard.styles';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export const Storecard: FC<unknown> = () => {
  return (
    <StoreCard>
      <StoreTitle>IN0006</StoreTitle>
      <StoreParagraph>
        jwebhfjewf
        <br />
        jhbejfref
      </StoreParagraph>
      <StoreDate>
        <CalendarTodayIcon fontSize="small" />
        Open Date: 2023-10-01 | Close Date: 2023-10-31
      </StoreDate>
      <StoreInformation>
        <StoreVisible>Visible</StoreVisible>
        <StoreImportant>Missing Information!</StoreImportant>
      </StoreInformation>
      <StoreEdit>Edit Store</StoreEdit>
    </StoreCard>
  );
};
