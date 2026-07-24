import TextTitle from "@/components/Layout/TextTitle";
import PeopleForm from "@/components/People/Form";
import PeopleList from "@/components/People/List";
import { usePeople } from "@/hooks/usePeople";

export default function PeoplePage() {
  const { people, form, loading, error, handleChange, create, removePerson } =
    usePeople();

  return (
    <div>
      <TextTitle
        title="Pessoas"
        subtitle="Cadastre e gerencie as pessoas que utilizam o sistema."
      />

      <div className="grid">
        <PeopleForm
          form={form}
          loading={loading}
          error={error}
          onChange={handleChange}
          onSubmit={create}
        />
        <PeopleList people={people} onRemove={removePerson} />
      </div>
    </div>
  );
}
