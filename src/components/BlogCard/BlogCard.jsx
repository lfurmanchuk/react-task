import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  DateElem,
} from './BlogCard.styled';

import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export const BlogCard = ({
  data: { poster, tag, title, description, name, avatar, postedAt },
}) => {
  return (
    <Card>
      <CardHeader>
        <CardPoster src={poster} alt={title} />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt={name} />
          <UserInfo>
            <UserName>{name}</UserName>
            <DateElem>
              {formatDistanceToNow(new Date(postedAt), { addSuffix: true })}
            </DateElem>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};

BlogCard.propTypes = {
  data: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    postedAt: PropTypes.string.isRequired,
  }).isRequired,
};
