import { FC } from 'react';
import { FeatureWrapper } from '@components';
import {
  Avatar,
  Box,
  InputAdornment,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  TextField
} from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { useTranslation } from 'react-i18next';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

type PropsUserList = {};

export const UserList: FC<PropsUserList> = () => {
  const { t } = useTranslation();
  return (
    <FeatureWrapper>
      <Box sx={{ overflow: 'auto' }}>
        <Box sx={{ width: '100%', display: 'table', tableLayout: 'fixed' }}>
          <Box sx={{ m: 1, maxWidth: '100%', width: 500 }}>
            <TextField
              fullWidth
              label={t('searchByName')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position={'start'}>
                    <SearchOutlinedIcon fontSize={'small'} />
                  </InputAdornment>
                )
              }}
            />
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel>Nombre</TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel>Usuario</TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel>Cargo</TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel>Rol</TableSortLabel>
                </TableCell>
                <TableCell align={'right'}>
                  <MoreVertOutlinedIcon fontSize={'small'} />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      sx={{
                        height: 42,
                        width: 42,
                        backgroundColor: 'primary.main'
                      }}
                    >
                      MD
                    </Avatar>
                    <Box sx={{ ml: 1 }}>
                      <Link color={'inherit'} variant={'subtitle2'} component={'a'} sx={{ cursor: 'pointer' }}>
                        Maria Dominguez
                      </Link>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>MDominguez</TableCell>
                <TableCell>Auxiliar de Recursos Humanos</TableCell>
                <TableCell>Editor</TableCell>
                <TableCell align={'right'}>
                  <MoreVertOutlinedIcon fontSize={'small'} />
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      sx={{
                        height: 42,
                        width: 42,
                        backgroundColor: 'primary.main'
                      }}
                    >
                      MD
                    </Avatar>
                    <Box sx={{ ml: 1 }}>
                      <Link color={'inherit'} variant={'subtitle2'} sx={{ cursor: 'pointer' }}>
                        Maria Dominguez
                      </Link>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>MDominguez</TableCell>
                <TableCell>Auxiliar de Recursos Humanos</TableCell>
                <TableCell>Editor</TableCell>
                <TableCell align={'right'}>
                  <MoreVertOutlinedIcon fontSize={'small'} />
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      sx={{
                        height: 42,
                        width: 42,
                        backgroundColor: 'primary.main'
                      }}
                    >
                      MD
                    </Avatar>
                    <Box sx={{ ml: 1 }}>
                      <Link color={'inherit'} variant={'subtitle2'} sx={{ cursor: 'pointer' }}>
                        Maria Dominguez
                      </Link>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>MDominguez</TableCell>
                <TableCell>Auxiliar de Recursos Humanos</TableCell>
                <TableCell>Editor</TableCell>
                <TableCell align={'right'}>
                  <MoreVertOutlinedIcon fontSize={'small'} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Box>
      <Box display={'flex'} justifyContent={'flex-end'}>
        <TablePagination
          component={'div'}
          count={10}
          rowsPerPage={3}
          onPageChange={() => null}
          onRowsPerPageChange={() => null}
          page={1}
          labelDisplayedRows={({ from, to, count }) =>
            `${from}–${to} ${t('of')} ${count !== -1 ? count : `${t('moreThan')} ${to}`}`
          }
          labelRowsPerPage={t('rowsPerPage')}
          rowsPerPageOptions={[3, 6, 10]}
        />
      </Box>
    </FeatureWrapper>
  );
};
