const Item = (props) => {
  if (props.worked == true) {
    return (
      <TouchableOpacity
        onPress={() => setSelectItem(props.id)}
        style={styles.item_worked}
      >
        <Text style={styles.title}>{props.title}</Text>
        {props.worked == true ? (
          <Text style={styles.inWork_title}>В роботі</Text>
        ) : (
          <Text style={styles.workDate}>{props.date}</Text>
        )}
      </TouchableOpacity>
    );
  }

  if (props.id == selectItem) {
    return (
      <TouchableOpacity
        onPress={() => setSelectItem(props.id)}
        style={styles.item_active}
      >
        <Text style={styles.inWork_title_active}>{props.title}</Text>
        {props.worked == true ? (
          <Text style={styles.inWork_title}>В роботі</Text>
        ) : (
          <Text style={styles.workDate_active}>{props.date}</Text>
        )}
      </TouchableOpacity>
    );
  }

  if (props.id === selectItem && props.worked === true) {
    return (
      <TouchableOpacity
        onPress={() => setSelectItem(props.id)}
        style={styles.item_active_work}
      >
        <Text style={styles.inWork_title_active}>{props.title}</Text>
        {props.worked == true ? (
          <Text style={styles.inWork_title}>В роботі</Text>
        ) : (
          <Text style={styles.workDate_active}>{props.date}</Text>
        )}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={() => setSelectItem(props.id)}
      style={styles.item}
    >
      <Text style={styles.title}>{props.title}</Text>
      {props.worked == true ? (
        <Text style={styles.inWork_title}>В роботі</Text>
      ) : (
        <Text style={styles.workDate}>{props.date}</Text>
      )}
    </TouchableOpacity>
  );
};
