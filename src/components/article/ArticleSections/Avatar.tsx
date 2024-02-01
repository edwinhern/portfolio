import { PortableTextBlock } from '@portabletext/types';
import imageUrlBuilder from '@sanity/image-url';

import { useArticleStore } from '@/components/article/context/ArticleContext';
import { calculateReadingTime } from '@/components/article/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import FormattedDate from '@/components/ui/formatted-date';
import { client } from '@/sanity/lib/client';
import { IArticle } from '@/sanity/types/test';

const builder = imageUrlBuilder(client);

export const ArticleAvatar = () => {
  const { article } = useArticleStore();
  const { body, publishedAt, author } = article as IArticle;
  const readTime = calculateReadingTime(body as PortableTextBlock[]);

  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src={builder.image(author.image).url()} alt={author.name} />
        <AvatarFallback>EH</AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
        <h5 className="text-lg font-normal tracking-wide">{author.name}</h5>
        <span className="text-sm">
          {readTime} · <FormattedDate dateString={publishedAt} dateType="short" />
        </span>
      </div>
    </div>
  );
};
