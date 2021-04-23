import Skeleton from 'react-loading-skeleton';

export function SkeletonTable() {
  return (
    <tr>
      <td style={{ width: 72 }}>
        <Skeleton circle={true} height={48} width={48} />
      </td>
      <td>
        <a><Skeleton width={400} /></a>
      </td>
      <td><Skeleton width={300} /></td>
      <td style={{ width: 100 }}><Skeleton width={100} /></td>
      <td><Skeleton width={100} /></td>
      <td>
        <button type="button">
          <img src="/play-green.svg" alt="Tocar episódio" />
        </button>
      </td>
  </tr>
  )
}