  import { Card, CardMedia, CardContent, Typography } from '@mui/material'

  const FilmCard = ({ film }) => (
    <Card>
      <CardMedia
        component="img"
        image={film.posterUrl}
        alt={film.title}
        sx={{ aspectRatio: '2 / 3', objectFit: 'cover' }}
      />
      <CardContent>
        <Typography
          variant="subtitle1"
          title={film.title}
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.3,
            minHeight: '2.6em', // 2 lines × 1.3, so one-line titles take the same space
          }}
        >
          {film.title}
        </Typography>
      </CardContent>
    </Card>
  )

  export default FilmCard