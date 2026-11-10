  import { Card, CardMedia, CardContent, Typography, Tooltip, Button } from '@mui/material'

  const FilmCard = ({ film }) => {
    // console.log(film)
    return (
      <Card>
        <CardMedia
          component="img"
          image={film.posterUrl}
          alt={film.title}
          sx={{ aspectRatio: '2 / 3', objectFit: 'cover' }}
        />
        <CardContent>
          <Tooltip describeChild disableFocusListener title= {film.title}>
            <Typography
              variant="subtitle1"
              sx={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                lineHeight: 1.3,
                minHeight: '2.6em',
              }}
            >
              {
              <>
                {film.title} — {Number(film.score).toFixed(2)}
              </>
              }
            </Typography>
        </Tooltip>
        </CardContent>
      </Card>
    )}
  export default FilmCard