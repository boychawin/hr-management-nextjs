
import TableUserPagination from '@/components/table/user';
import { getUsers } from '@/repositorys/user';

type Props = {
  searchParams?: {
    page?: string;
  };
};

export default async function Home({searchParams}:Props) {


  const currentPage = parseInt(searchParams?.page!, 10) || 1;
  const pageSize = 10;

  const [data] = await Promise.all([getUsers(currentPage, pageSize)]);

  return (
    <div>
      <div className="px-3">
          <TableUserPagination currentPage={currentPage} data={data} />
      </div>
    </div>
  );
}
